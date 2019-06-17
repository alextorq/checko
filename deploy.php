<?php
namespace Deployer;
//dep deploy production

require 'recipe/laravel.php';

// Project name
set('application', 'checko');
set('keep_releases', 5);
// Project repository
set('repository', 'git@github.com:alextorq/checko.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true);

// Shared files/dirs between deploys 
add('shared_files', []);
add('shared_dirs', ['storage']);

// Writable dirs by web server 
add('writable_dirs', [
    'bootstrap/cache',
    'storage',
    'storage/app',
    'storage/app/public',
    'storage/framework',
    'storage/framework/cache',
    'storage/framework/sessions',
    'storage/framework/views',
    'storage/logs',
]);


// Hosts
host('checko.me')
    ->stage('production')
    ->user('web2')
    ->port(972)
    ->forwardAgent(true)
    ->multiplexing(true)
    ->set('deploy_path', '/var/www/checko.me/html');



// Tasks
desc('Restart PHP-FPM service');
task('php-fpm:restart', function () {
    // The user must have rights for restart service
    // /etc/sudoers: username ALL=NOPASSWD:/bin/systemctl restart php-fpm.service
    run('sudo systemctl restart php7.2-fpm.service');
});


task('upload:env', function () {
    upload('.env.production', '{{deploy_path}}/shared/.env');
})->desc('Environment setup');


task('build', function () {
    run('cd {{release_path}} && build');
});

task('create_simlink_to_storage', function () {
  run('php artisan storage:link');
});

task('deploy', [
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:vendors',
    'deploy:writable',
    'upload:env',
    'artisan:view:clear',
    'artisan:cache:clear',
    'artisan:config:cache',
    'artisan:migrate',
    'create_simlink_to_storage',
    'deploy:symlink',
    'php-fpm:restart',
    'deploy:unlock',
    'cleanup',
]);


// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Migrate database before symlink new release.

before('deploy:symlink', 'artisan:migrate');

