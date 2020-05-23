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
        background-image: radial-gradient(70% 70% at 50% 100%,#e8e8e8 0,#fafafa 100%);
    }

</style>

<Nav {segment}/>
<div class="d-flex flex-column">
    <main class="gradient flex-grow-1 d-flex flex-column align-items-center">
        <slot></slot>
    </main>
    <Footer />
</div>
