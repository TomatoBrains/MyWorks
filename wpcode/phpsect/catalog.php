<?php
/*
Template Name: страница каталога косметики
*/
?>
<html>
<?php
include '_partials/head.php';
?>
<html>



<body>
    <div class="catalog-wraper" style="background: url(<?php echo get_stylesheet_directory_uri(); ?>/img/catalog/main/background.png) no-repeat; background-size: cover;">
        <!-- Header -->
        <?php
        include '_partials/header.php';
        ?>
        <!-- Main -->
        <?php
        include '_partialsCatalog/main.php';
        ?>
    </div>
    <!-- Cosmetic -->
    <?php
    include '_partialsCatalog/cosmetic.php';
    ?>
    <!-- Order -->
    <?php
    include '_partialsCatalog/order.php';
    ?>
    <!-- Material -->
    <?php
    include '_partialsCatalog/material.php';
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