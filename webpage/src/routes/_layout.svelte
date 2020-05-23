<script>
	import Nav from '../components/Nav.svelte';
    import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
	main {
        max-width: initial;
		box-sizing: border-box;
	}
    
    .gradient {
        min-height: 78vh;
		background-color: #ffe36d;
		# work-around https://github.com/sveltejs/sapper/issues/887
		background-image: url('/BitcoinClub/circuit-board.svg');
    }

</style>

<Nav {segment}/>
<div class="d-flex flex-column">
    <main class="gradient flex-grow-1 d-flex flex-column align-items-center">
        <slot></slot>
    </main>
    <Footer />
</div>
