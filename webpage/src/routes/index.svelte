<style>

	h1, h2, h3, figure {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		font-size: 4em;
		text-transform: uppercase;
		font-weight: 300;
	}

	#cc, #crypto, #sec, #priv, #dig {
		display: initial;
		color: #ff3e00;	
	}

    #change {
        color: var(--color);
		display: initial;
    }

    .spin {
		width: 300px;
		height: 300px;
	    -webkit-filter: grayscale(0);
	    filter: grayscale(0) blur(0);
	    -webkit-transition: .3s ease-in-out;
	    transition: .3s ease-in-out;
    }

    .spin:hover {
    	-webkit-filter: grayscale(100%) blur(2px);
    	filter: grayscale(100%) blur(2px);
    }

</style>

<script>
    import { onMount } from 'svelte';
	import numeral from 'numeral';
	import cssVars from 'svelte-css-vars';
    import getBTCPrice from './_btc.js';
    import Icon from 'svelte-awesome';
    import { faCog } from '@fortawesome/free-solid-svg-icons';
    import { faGithub } from '@fortawesome/free-brands-svg-icons';

    let volumeUSD = "...waiting",
	 changePercent24 = "...waiting",
	 currentRate = "...waiting",
	 isPositiveChange;

    async function fetchPrice() {
		let data = await getBTCPrice();
		volumeUSD = numeral(data.volumeUsd24Hr).format('($0.00a)');
		changePercent24 = parseFloat(data.changePercent24Hr).toFixed(2);
        currentRate = numeral(data.priceUsd).format('($0.00)');
        isPositiveChange = (changePercent24 < 0) ? false : true;
    }

    function waiting() {
        volumeUSD = "...waiting";
	    changePercent24 = "...waiting";
	    currentRate = "...waiting";
    }
    
    onMount(async () => {
        await fetchPrice();
    });

    $: percentChange = {
        color: isPositiveChange ? 'green' : 'red'
    };

</script>

<svelte:head>
	<title>Bitcoin Club at KSU</title>
</svelte:head>

<div class="container-fluid">
    <div class="row">

        <div class="col-sm-6 col-12 d-flex flex-column py-2 align-items-start" id="left">
		<h1>Bitcoin Club at KSU!</h1>
		<figure on:mouseenter={waiting} on:mouseleave={async () => {await fetchPrice()}}>
			<img class="spin" alt='Bitcoin Club' src='bitcoin_shine.gif'/>
            <figcaption>Hover over the image for an update.</figcaption>
		</figure>
			<h3 class="flex-row col align-content-center p-2">Price: {currentRate}</h3>
			<h3 class="flex-row col align-content-center p-2 ">Volume(24Hr): {volumeUSD}</h3>
			<h3 class="flex-row col align-content-center p-2 ">Change(24Hr): <div id="change" use:cssVars="{percentChange}">{changePercent24}%</div></h3>
    	</div>


        <div class="col-sm-6 col-12 py-2">
            <br><br><br><br>
			<h2 class="row d-flex align-items-center text-left">We strive to promote currently emerging innovations related to the digital economy. The mindset of this organization as a whole is to gain knowledge and help build skillset to appreciate the digital economy technologies. We wish to share and promote digital economy solutions through collaborative and peer learning efforts. The mission of this organization is to help students understand and develop an appreciation for <div id="cc">cryptocurrencies</div>,&nbsp;<div id="crypto">cryptography</div>,&nbsp;<div id="sec">security</div>,&nbsp;<div id="priv">privacy</div>,&nbsp;and <div id="dig">the digital economy</div>.</h2>
            <br><br>
            <Icon data={faCog} spin/>
            <small>We are currently working on updating the website meanwhile check out the About section!</small>
		</div>
    </div>
</div>
