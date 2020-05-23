<script>
    import Icon from 'svelte-awesome';
    import { faGithub  } from '@fortawesome/free-brands-svg-icons'; 
</script>

<style>

    #footer-bg{
        background-image: linear-gradient(to bottom, #ffffff, #fbfbfb, #f6f6f6, #f2f2f2, #eeeeee);
    }
    
</style>

<footer class="py-4 mt-auto bg-dark" id="footer-bg">
	<div class="text-center">
		<p>Copyright &copy; <a href="https://github.com/bitcoinclubatksu" target="_blank"> Bitcoin Club at KSU.</a> Maintained by <a href="https://github.com/harshitjoshi" target="_blank" >Harshit Joshi</a> <Icon data={faGithub} scale="2" /></p>
	</div>
</footer>
