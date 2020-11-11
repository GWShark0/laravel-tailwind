<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel Tailwind Example</title>

        <!-- Proxima Nova font -->
        <link rel="stylesheet" href="https://use.typekit.net/nuo0mcp.css">

        <!-- Tailwind CSS styles -->
        <link href="{{ mix('css/tailwind.css') }}" rel="stylesheet">
    </head>
    <body>
        <div class="p-4">
            <div class="alert alert-success mb-2">
                <span>Success</span>
            </div>
            Hello World!
            <button class="btn btn-primary">Primary</button>
        </div>
    </body>
</html>
