<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- element UI CSS -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"  crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">


    <link rel="stylesheet" href="{{ env('APP_URL') . '/css/backend/app.css' }}">
    <title>Административная панель</title>
</head>
<body>

<div id="app"></div>

<!-- import JavaScript -->
<script src="{{ env('APP_URL') . '/js/backend/main.js'}}"></script>

</body>
</html>
