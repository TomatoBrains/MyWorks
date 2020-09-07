<?php
/*
Template Name: страница контактов
*/
?>

<html>
<?php
include '_partials/head.php';
?>

<body>
    <div class="wrapper__background" style="background: url(<?php echo get_stylesheet_directory_uri(); ?>/img/background.png) no-repeat; background-size: cover;">
        <!--header-->
        <?php
        include '_partials/header.php';
        ?>
        <!-- main -->
        <?php
        include '_partialsContact/description.php';
        ?>
        <!-- footer -->
        <?php
        include '_partials/footer.php';
        ?>
    </div>
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