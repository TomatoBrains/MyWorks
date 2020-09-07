<?php
/*
Template Name: страница оубчения
*/
?>
<html>
<?php
include '_partials/head.php';
?>

<body>
    <div class="learn-wraper" style="background: url(<?php echo get_stylesheet_directory_uri(); ?>/img/learn/main/background.png) no-repeat; background-size: cover;">
        <!-- header -->
        <?php
        include '_partials/header.php';
        ?>
        <!-- main -->
        <?php
        include '_partialsLearn/main.php';
        ?>
    </div>
    <!-- who -->
    <?php
    include '_partialsLearn/who.php';
    ?>
    <!-- programm -->
    <?php
    include '_partialsLearn/programm.php';
    ?>
    <!-- look -->
    <?php
    include '_partialsLearn/look.php';
    ?>
    <!-- cost -->
    <?php
    include '_partialsLearn/cost.php';
    ?>
    <!-- graduate -->
    <?php
    include '_partialsLearn/graduate.php';
    ?>
    <!-- joy -->
    <?php
    include '_partialsLearn/joy.php';
    ?>
    <!-- request -->
    <?php
    include '_partialsLearn/request.php';
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