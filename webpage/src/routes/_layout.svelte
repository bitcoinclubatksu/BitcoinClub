<script>
	import Nav from '../components/Nav.svelte';
    import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
        max-width: initial;
        padding: 1em;
		box-sizing: border-box;
        flex: 1 0 auto;
	}
    
    .gradient {
        min-height: 100vh;
        background-color: #d9e4f5;
        background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);
    }
</style>

<Nav {segment}/>
<div class="d-flex flex-column">
    <div class="gradient">
        <main>
    	    <slot></slot>
        </main>
    </div>
    <Footer/>
</div>
