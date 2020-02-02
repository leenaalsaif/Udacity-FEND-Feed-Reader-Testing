$(function () {
    //test suite just contains all tests about the RSS
    describe('RSS Feeds', function () {
        //tests that the allFeeds variable is defined and that it is not empty
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //makes sure that the url is defined
        it('should have a URL defined and that the URL is not empty', function () {
            //loops through each feed in the allFeed objects using a for of loop
            for (feed of allFeeds) {
                //makes sure that the url is defined
                expect(feed.url).toBeDefined();
                //makes sure that the url is not empty
                expect(feed.url).not.toBeNull();
            }
        });

        it('should have a name defined and that the name is not empty', function () {
            //loops through each feed in the allFeed objects using a for of loop
            for (feed of allFeeds) {
                //makes sure that the name is defined
                expect(feed.name).toBeDefined();
                //makes sure that the name is not empty
                expect(feed.name).not.toBeNull();
            }
        });
    });

    //test suite just contains all tests about the the menu
    describe('The menu', function () {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        //tests that the menu element is hiddent by default
        it('should have the menu element hidden by default', function () {
            //checks if the body element has a class named 'menu-hidden' in order to check if its hiddent or not
            expect(document.getElementsByTagName('body')[0]).toHaveClass('menu-hidden');
        });


        //tests if the menu changes visibility when the hamburger icon is clicked
        it('menu changes visibility when the menu icon is clicked', function () {
            //gets the haburger icon
            menuIcon = $('.menu-icon-link');
            //hamburger icon is clicked
            menuIcon.trigger('click');
            //when clicked the menu becomes visible since it doesnt have the class 'menu-hidden'
            expect(document.getElementsByTagName('body')[0]).not.toHaveClass('menu-hidden');
            //hamburger icon is clicked
            menuIcon.trigger('click');
            //when clicked the menu becomes hidden since it has the class 'menu-hidden'
            expect(document.getElementsByTagName('body')[0]).toHaveClass('menu-hidden');
        })
    })

    //test suite just contains all tests about the initial enteries
    describe('Initial Enteries', function () {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        //loads the loadFeed function before every test in this test suite
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        //tests if there is at least one .entry element in the .feed
        it('should have at least one entry element within the feed container', function () {
            //gets the feed array
            feed = $('.feed .entry')
            //checks if the feed array length is at least greater than one element
            expect(feed.length).toBeGreaterThan(0);
        });
    })

    //test suite just contains all tests about the new feed selection
    describe('New Feed Selection', function () {

        //defines the firstFeed variable
        let firstFeed;

        //loads the loadFeed function before every test in this test suite
        beforeEach(function (done) {
            loadFeed(0, function () {
                //gets the content of the first feed
                firstFeed = $('.feed').html();
                loadFeed(1, function () {
                    done();
                });
            });
        });

        it('the content of the feed changes when a new feed is loaded', function () {
            //defines the secondFeed and gets the content of it
            let secondFeed = $('.feed').html();
            //compares the two feeds and makes sure that they are not the same
            expect(secondFeed).not.toBe(firstFeed);
        })
    })
}());
