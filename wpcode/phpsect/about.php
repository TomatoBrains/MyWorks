<?php
/*
Template Name: страница О студии
*/
?>
<html>
<?php
include '_partials/head.php';
?>


<body>
    <div class="about-wraper" style="background: url(<?php echo get_stylesheet_directory_uri(); ?>/img/about/back1.png) no-repeat bottom; background-size: auto;">
        <!--header-->
        <?php
        include '_partials/header.php';
        ?>
        <!-- main -->
        <?php
        include '_partialsAbout/aboutDescr.php';
        ?>
        <!-- screenshots -->
        <?php
        include '_partialsAbout/screenshots.php';
        ?>
        <!-- video -->
        <?php
        include '_partialsAbout/video.php';
        ?>
    </div>
    <!-- team -->
    <?php
    include '_partialsAbout/team.php';
    ?>
    <!-- work -->
    <?php
    include '_partialsAbout/work.php';
    ?>
    <!-- same -->
    <?php
    include '_partialsAbout/same.php';
    ?>
    <!-- services -->
    <?php
    include '_partialsAbout/services.php';
    ?>
    <!-- footer -->
    <?php
    include '_partials/footer.php';
    ?>
    <!-- popups -->
    <?php
    include '_partials/popup.php';
    ?>

    </div>
    <!-- scripts -->
    <?php
    include '_partials/scripts.php';
    ?>
</body>

</html>