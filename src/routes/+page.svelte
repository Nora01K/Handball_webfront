<script lang="ts">
	import { t, locale, locales } from '../i18n';
</script>

<main class="flex flex-col">
	<div class="flex flex-row w-screen h-32 items-center justify-center mt-">
		<div class="flex flex-row justify-around w-3/5 h-80">
			<div class="flex flex-col w-50 justify-center items-center mx-3">
				<h1 class="h3">{@html $t('landing.card.trainingdescr')}</h1>
				<p1 class="text-center">{@html $t('landing.card.trainingdescr')}</p1>
			</div>
			<div class="flex flex-col w-30 justify-center items-center mx-3 flex-wrap">
				<h1 class="h3">{@html $t('landing.card.statistictitle')}</h1>
				<p1 class="text-center">{@html $t('landing.card.statisticdescr')}</p1>
			</div>
			<div class="flex flex-col w-50 justify-center items-center mx-3">
				<h1 class="h3">{@html $t('landing.card.throwpicturestitle')}</h1>
				<p1 class="text-center">{@html $t('landing.card.throwpicturesdescr')}</p1>
			</div>
		</div>
	</div>
	<div class=" flex w-screen flex-col h-80 justify-center items-center">
		<a href="/support" class="card w-96 h-32 flex flex-col justify-center items-center">
			<h1 class="h3">{@html $t('landing.contact.title')}!</h1>
			<p1 class="text-center">{@html $t('landing.contact.descr')}</p1>
		</a>
	</div>
</main>

<style lang="postcss">
</style>
