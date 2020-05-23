<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(202,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
        color: black;
	}

</style>

<nav>
	<ul class="d-flex p-2">
        <li><figure>
            <img alt='Bitcoin Club at KSU' height="80" width="80" src='club_logo.png'/>
        </figure></li>
		<li class="align-self-center"><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a></li>
		<li class="align-self-center"><a aria-current='{segment === "about" ? "page" : undefined}' href='https://owllife.kennesaw.edu/organization/bitcoinclub' target='_blank'>about</a></li>
	</ul>
</nav>
