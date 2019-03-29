<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>


    <!-- Scripts -->
    <script src="{{ asset('js/default.js') }}" defer></script>

    <link rel="shortcut icon" href="{{ asset('/images/favicon_16.png') }}" type="image/x-icon">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('/images/favicon_72.png') }}">
    <link rel="apple-touch-icon" sizes="115x115" href="{{ asset('/images/favicon_115.png') }}">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&amp;subset=cyrillic" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <main class="main_content">
            @yield('content')
        </main>
    </div>
</body>
</html>
