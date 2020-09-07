<?php
/*
Template Name: страница депиляции
*/
?>
<html>

<?php
include '_partials/head.php';
?>

<body>
    <div class="wrapper_background" style="background: url(<?php echo get_stylesheet_directory_uri(); ?>/img/background.png) no-repeat; background-size: cover;">
        <!-- header -->
        <?php
        include '_partials/header.php';
        ?>
        <!-- main -->
        <?php
        include '_partialsDep/main.php';
        ?>
    </div>

    <div class="save-fact--wraper" style="background: url(<?php echo get_stylesheet_directory_uri(); ?>/img/dep/backSave.png) no-repeat bottom; background-size: cover;">
        <!-- save -->
        <?php
        include '_partialsDep/save.php';
        ?>
        <!-- facts -->
        <?php
        include '_partialsDep/facts.php';
        ?>
    </div>
    <!-- pain -->
    <?php
    include '_partialsDep/pain.php';
    ?>
    <!-- work -->
    <?php
    include '_partials/work.php';
    ?>
    <form class="form">
        <!-- price -->
        <?php
        include '_partialsDep/price.php';
        ?>
        <!-- request -->
        <?php
        include '_partialsDep/request.php';
        ?>
    </form>
    <!-- complex -->
    {<?php
        include '_partialsDep/complex.php';
        ?>
    <!-- qualification -->
    <?php
    include '_partials/qualification.php';
    ?>
    <!-- rewies -->
    <?php
    include '_partials/rewies.php';
    ?>
    <!-- wait -->
    <?php
    include '_partialsDep/wait.php';
    ?>
    <!-- qa -->
    <?php
    include '_partialsDep/qa.php';
    ?>
    <!-- online -->
    <?php
    include '_partialsDep/online.php';
    ?>
    <!-- learn -->
    <?php
    include '_partialsDep/learn.php';
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