<?php
/*
Template Name: страница главная
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
        include '_partials/main.php';
        ?>
    </div>
    <!-- relocation -->
    <?php
    include '_partials/relocation.php';
    ?>
    <!-- services -->
    <?php
    include '_partials/services.php';
    ?>
    <!-- work -->
    <?php
    include '_partials/work.php';
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
    include '_partials/wait.php';
    ?>
    <!-- request -->
    <?php
    include '_partials/request.php';
    ?>
    <!-- paper -->
    <?php
    include '_partials/paper.php';
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