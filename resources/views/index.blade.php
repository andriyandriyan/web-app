<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Web App</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    html, body {
      font-size: 14px;
    }

    #preloader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1003;
      background: #fff;
      opacity: 1;
      transition: all .5s linear 0s;
      display: flex;
      justify-content: center;
      align-items: center
    }

    .spinner {
      width: 40px;
      height: 40px;
      position: relative;
      margin: 100px auto
    }

    .double-bounce1,
    .double-bounce2 {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: var(--chakra-colors-brand-500, #256bcb);
      opacity: .6;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-animation: 2s ease-in-out infinite sk-bounce;
      animation: 2s ease-in-out infinite sk-bounce
    }

    .double-bounce2 {
      -webkit-animation-delay: -1s;
      animation-delay: -1s
    }

    @-webkit-keyframes sk-bounce {

      0%,
      100% {
        -webkit-transform: scale(0)
      }

      50% {
        -webkit-transform: scale(1)
      }
    }

    @keyframes sk-bounce {

      0%,
      100% {
        transform: scale(0);
        -webkit-transform: scale(0)
      }

      50% {
        transform: scale(1);
        -webkit-transform: scale(1)
      }
    }

  </style>
</head>

<body>
  <div id="root"></div>
  <div id="preloader">
    <div className="spinner">
      <div className="double-bounce1" />
      <div className="double-bounce2" />
    </div>
  </div>
  @react
  @vite
</body>

</html>
