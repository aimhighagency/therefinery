<header id="header-main">
	<div class="inner">
		<div id="logo"><a href="/"><img src="/<?php echo path_to_theme(); ?>/images/The-Refinery-Logo_owl-circle.svg" alt="The Refinery Logo"></a></div>
		
		<nav id="nav-main">
			<ul>
				<li><a href=""><span class="num">1.</span><span class="item">Who are we?</span></a></li>
				<li><a href=""><span class="num">2.</span><span class="item">What we do</span></a></li>
				<li><a href=""><span class="num">3.</span><span class="item">Whay we do it</span></a></li>
				<li><a href=""><span class="num">4.</span><span class="item">Some other stuff</span></a></li>
				<li><a href=""><span class="num">5.</span><span class="item">Let's get started</span></a></li>
			</ul>
		</nav> <!-- END #nav -->

		<div class="menu-toggle icon-list"></div>
	</div>
</header>  <!-- END header -->

<div id="content-main">
	<div class="inner">
		<?php if(isset($messages)): ?>
			<div id="messages"><?php echo $messages; ?></div>
		<?php endif; ?>

		<?php if(isset($tabs)): ?>
			<div id="tabs"><?php echo render($tabs); ?></div>
		<?php endif; ?>

		<?php if(isset($title)): ?>
			<h1 id="page-title"><?php echo $title; ?></h1>
		<?php endif; ?>

		<div id="content">
			<?php print render($page['content']); ?>
		</div>

		<section id="instagram">
			<div class="inner">
				<div class="header">
					<div class="fancy text-center">And yes...</div>
					<h1>We have an instagram</h1>
				</div>
				<div class="insta-feed">
					<?php
						$block = module_invoke('instagram_block', 'block_view', 'instagram_block');
						print render($block);
					?>
				</div>
			</div>
		</section>
	</div>
</div>

<footer id="footer-main">
	<div class="inner">
		<div class="footer-left"><?php print render($page['footer_left']); ?></div>
		<div class="footer-main"><?php print render($page['footer_main']); ?></div>
		<div class="footer-right"><?php print render($page['footer_right']); ?></div>		
	</div>

	<div class="copy">
		&copy; <?php echo date('Y'); ?> The Refinery LA &mdash; Don't Steal. It's not nice.
	</div>
</footer>
