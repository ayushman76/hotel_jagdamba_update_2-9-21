(function() {
    var body = document.getElementById('body');
    var nav = document.createElement('nav');

    body.appendChild(nav);

    var nav_jason = [{
        link: 'index.html',
        link01: 'about.html',
        link02: 'rooms.html',
		link002: 'hall.html',
        link03: 'resturant.html',
        link04: 'booking.html',
		link05:'our_galllery.html'
    }, {
        nav01: 'Home',
        nav02: 'About',
        nav03: 'Our Rooms',
		nav002:'Our Halls',
        nav04: 'Restourent',
        nav05: 'Book Now',
		nav06:'Our Gallery'
    }]
    document.querySelector('nav').innerHTML += `
                    <div class="container">
	    <div class="row">
	        <div class="col-md-12">
	            <div class="navigation">
                                   <ul class="navbar-nav nav">
		<li>
		    <a href="${nav_jason[0].link}">${nav_jason[1].nav01}</a>
		</li>
		<li>
		    <a href="${nav_jason[0].link01}">${nav_jason[1].nav02}</a>
		</li>
		<li>
		    <a href="${nav_jason[0].link02}">${nav_jason[1].nav03}</a>
		</li>
		<li>
		    <a href="${nav_jason[0].link002}">${nav_jason[1].nav002}</a>
		</li>
		<li>
		    <a href="${nav_jason[0].link03}">${nav_jason[1].nav04}</a>
		</li>
		<li>
		    <a href="${nav_jason[0].link05}">${nav_jason[1].nav06}</a>
		</li>
		<li>
		    <a href="${nav_jason[0].link04}">${nav_jason[1].nav05}</a>
		</li>
		
                                    </ul>
	           </div>
	        </div>
	    </div>
	</div>
`;
})();