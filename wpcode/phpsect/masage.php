<?php
/*
Template Name: страница масажа
*/
?>
<html>
<?php
include '_partials/head.php';
?>


<body>
    <div class="masage-wraper" style="background: url(<?php echo get_stylesheet_directory_uri(); ?>/img/masage/main/back.png) no-repeat; background-size: cover;">
        <!-- header -->
        <?php
        include '_partials/header.php';
        ?>
        <!-- main -->
        <?php
        include '_partialsMasage/main.php';
        ?>
    </div>
    <!-- indications -->
    <?php
    include '_partialsMasage/indications.php';
    ?>
    <!-- benefit -->
    <?php
    include '_partialsMasage/benefit.php';
    ?>
    <!-- effect -->
    <?php
    include '_partialsMasage/effect.php';
    ?>
    <div class="masage__result-wraper" style="background: url(<?php echo get_stylesheet_directory_uri(); ?>/img/masage/result/back.png) no-repeat; background-size: cover;">
        <!-- result -->
        <?php
        include '_partialsMasage/result.php';
        ?>
        <!-- watch -->
        <?php
        include '_partialsMasage/watch.php';
        ?>
        <!-- cost -->
        <?php
        include '_partialsMasage/cost.php';
        ?>
        <!-- request -->
        <?php
        include '_partialsDep/request.php';
        ?>
    </div>
    <!-- warning -->
    <?php
    include '_partialsMasage/warning.php';
    ?>
    <!-- master -->
    <?php
    include '_partialsMasage/master.php';
    ?>
    <!-- reviews -->
    <?php
    include '_partialsMasage/reviews.php';
    ?>
    <!-- wait -->
    <?php
    include '_partialsMasage/wait.php';
    ?>
    <!-- qa -->
    <?php
    include '_partialsMasage/qa.php';
    ?>
    <!-- online -->
    <?php
    include '_partialsMasage/online.php';
    ?>
    <!-- footer -->
    <?php
    include '_partials/footer.php';
    ?>
    <!-- popups -->
    <?php
    include '_partials/popup.php';
    ?>
    <!-- scripts -->
    <?php
    include '_partials/scripts.php';
    ?>
</body>

</html>