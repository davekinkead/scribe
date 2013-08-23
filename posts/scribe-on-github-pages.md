# Scribe + Github = Awesome

Using Github Pages to host Scribe is possibly the easiest way to get your blog up and running in the entire history of the universe.  Possibly.  Here's how to do it in three easy steps:

1.  Fork the the [Scribe](https://github.com/davekinkead/scribe) repo on Github.
2.  Rename your copy of the repo to `username.github.io`, and yes username is what ever _your_ github username is.
3.  Nothing.  There is no step 3!  

Visit https://username.github.io to see your super sweet new blog.

If you are using scribe for your [project page](https://help.github.com/articles/creating-project-pages-manually), then follow the same steps but pull scribe onto a gh-pages branch.  Just:

    $ git checkout --orphan gh-pages
    $ git rm -rf .
    $ git remote add scribe git@github.com:davekinkead/scribe.git
    $ git pull scribe gh-pages

Questions? Tough luck. If this is too hard you probably shouldn't be blogging :(