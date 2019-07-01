<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>

    <link rel="shortcut icon" href="{{ asset('/images/favicon_16.png') }}" type="image/x-icon">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('/images/favicon_72.png') }}">
    <link rel="apple-touch-icon" sizes="115x115" href="{{ asset('/images/favicon_115.png') }}">
    <link rel="manifest" href="{{ asset('/manifest.json') }}">
    <link rel="icon" sizes="72x72" href="{{ asset('/images/favicon_72.png') }}">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">

    <meta name="theme-color" content="#01b06d">
    <meta property="og:locale" content="en_GB">
    <meta property="og:url" content={{ config('app.url', 'Laravel') }}>
    <meta property="og:image" content="{{ asset('/images/logo_512.png') }}">
    <meta property="og:title" content="Easy way to create a checklist">
    <meta property="og:description" content="No registration required. You can quickly create and manage your checklist via a short link.">
    <meta name="Description" content="Make live easy">



    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
@auth
    <script>
        let userAuth = true;
    </script>
@endauth
@guest
    <script>
        let userAuth = false;
    </script>
@endguest

    <div id="app">
        <main class="main_content">
            @yield('content')
        </main>
    </div>
</body>
</html>
