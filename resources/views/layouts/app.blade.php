<html>
<head>
    <title>App Name - @yield('title')</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>
<body>
<div class="container-fluid mt-5">
    @yield('content')
</div>
<script src="{{asset('js/app.js')}}"></script>

</body>
</html>
