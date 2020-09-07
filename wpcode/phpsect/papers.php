<?php
/*
Template Name: страница статей
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
        <!-- papers -->
        <?php
        include '_partialspapers/papers.php';
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
    </div>
</body>

</html>