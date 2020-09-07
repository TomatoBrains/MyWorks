<div class="request" id="request">
    <div class="container">
        <div class="request__title">
            <h2>Оставьте заявку через сайт <span class="light">
                    и получите карту гостя и скидку 15% на первую процедуру
                </span> </h2>
        </div>
        <div class="request__form">
            <div class="request__form-img">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/request/ipad.png" alt="ipad">
            </div>
            <div class="request__form-inputs">
                <form class="form" action="">
                    <input type="hidden" name="title" value="Первая заявка">
                    <div class="request__form-select">
                        <label for="select">Выберите услугу</label>
                        <select required class="basic" name="group" id="">
                            <option value="Шугаринг 1">Шугаринг 1</option>
                            <option value="Шугаринг 2">Шугаринг 2</option>
                            <option value="Шугаринг 3">Шугаринг 3</option>
                        </select>
                    </div>
                    <div class="request__form-name">
                        <label for="name">Как Вас зовут</label>
                        <input required type="text" id="name" name="name" placeholder="Ваше имя">
                    </div>
                    <div class="request__form-tel">
                        <label for="tel">Ваш номер телефона</label>
                        <input required id="inputTel" type="tel" id="tel" name="phone" placeholder="+375 -- --- -- --">
                    </div>
                    <div class="request__form-btn">
                        <button class="btn">ОСТАВИТЬ ЗАЯВКУ</button>
                        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/request/plant.png" alt="растение">
                    </div>
                </form>
            </div>
            <div class="request__form-women">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/request/women.png" alt="женщина">
                <div class="request__form-women--name">
                    <p class="purple">ЕКАТЕРИНА</p>
                </div>
                <div class="request__form-women--master">
                    <p>Руководитель студии PINCET</p>
                </div>
            </div>
            <div class="request__form-rightImg blur2">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/request/branch.png" alt="лепестки">
            </div>
            <div class="request__form-leftImg blur">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/request/leaves.png" alt="лепестки">
            </div>
        </div>
    </div>
    <div class="request__blur blur2">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/request/blur.png" alt="пятно">
    </div>
</div>