<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?> >
<header>
       <!-- NavBar - Start -->
	   <nav class="navigation">
               
               <input type="checkbox" class="navigation__checkbox" id="checkLabel" />
               <label class="navigation__label" for="checkLabel" >
                   <span class="navigation__icon">&nbsp;</span>
                </label>
                <a href="<?php echo site_url() ?>"> 
				<img src="<?php echo get_template_directory_uri().'/dist/assets/images/logoV2-top.svg' ?>"
				</a>
                <div class="navigation__bg"></div>
               
            
            <div class="navigation__menu">
                <ul class="navigation__list">
                    <li class="navigation__item"><a class="navigation__link" href="/">Home</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="/">About</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="/PostPage">Blog</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#Experiencesy">Experience</a> </li>
                    <li class="navigation__item"><a class="navigation__link" href="#worky">Work</a></li> 
                    <li class="navigation__item"><a class="navigation__link" href="#worky">Contact</a></li>
                </ul>
             </div>
            </nav> 
	   <!-- NavBar - End  -->
       <div class="my-bio-container">
       <div class="my-bio">
           <div>
           <p> Hi, My name is </p>
           <h3>CHEIKHANY EJIWEN</h3>
           <p class="my-bio--role">Software Engineer in san francisco</p>
           </div>
       </div>
       </div>
       <img src="<?php echo get_template_directory_uri().'/dist/assets/images/header-mr-sf.svg' ?>"
	   style="visibility: hidden; height:600px; border:1px solid red" />
       <HeaderBttomBg></HeaderBttomBg>
    </header>