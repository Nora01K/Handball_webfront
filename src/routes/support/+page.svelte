<script lang="ts">
</script>

<main class="flex items-center ml-[35vw] justify-start float-none w-[30vw] h-[90vh]">
	<div class="card p-2">
		<form>
			<h1 class="h3">Send a Message</h1>
			<label>
				<span>Name</span>
				<input class="input" type="text" placeholder="Max Mustermann" />
			</label>
			<label>
				<span>Telephone</span>
				<input class="input" type="tel" placeholder="+61 123 456 789" />
			</label>
			<label>
				<span>Email</span>
				<input class="input" type="email" placeholder="max.mustermann@test.com" />
			</label>
			<label>
				<span>Club</span>
				<input class="input" type="text" placeholder="TSV Musterstadt" />
			</label>
			<label>
				<span>Message</span>
				<textarea class="textarea" name="message" id="" cols="30" rows="6" />
			</label>
			<button class="btn variant-filled-primary float-right" type="submit">Send</button>
		</form>
	</div>
</main>

<style>
</style>
