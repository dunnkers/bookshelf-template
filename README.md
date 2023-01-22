# bookshelf-template
Hi! This is a template you can generate a Bookshelf website with.

![bookshelf example](https://user-images.githubusercontent.com/744430/80863557-93ff3c80-8c7d-11ea-9453-0c832e96842d.png)

^ example of the bookshelf.

## Usage


### 
1. Click _Use this template_ to create a new repo.

    <a href="https://github.com/dunnkers/bookshelf-template/generate"><img alt="use this template GitHub button" src="https://camo.githubusercontent.com/523d7e81c3d3dcd01b711f14c87e850edeb8e62bf72814d3231ab084a0c70d31/68747470733a2f2f7777772e726f737472756d2e626c6f672f706f73742f323031392d30362d31312d612d7265706f2d74656d706c6174652d666f722d722d616e616c797369735f66696c65732f7573652d746869732e706e67" width="150px" /></a>


1. Install deps:

    ```
    yarn
    ```

1. Build the website:

    ```
    yarn build
    ```

    ✨

    This now put a static website in `build`. You can deploy this to GitHub pages.

### Loading your own books
To now load your own books onto the bookshelf, go into `compile-website.mjs` and load your own books into the `bookShelves` variable.

```javascript
const bookShelves = null; // Load your books into this variable.
```

You can, for example, organise your books on [OpenLibrary.org](https://openlibrary.org/) and then retrieve your books using their awesome free [API](https://openlibrary.org/developers/api). If you happen to have a Goodreads API key then that is possible too, check out the [`goodreads-api`](https://github.com/dunnkers/goodreads-api). However, Goodreads [no longer issues API keys](https://help.goodreads.com/s/article/Does-Goodreads-support-the-use-of-APIs) for new users.

## Deploying

### GitHub pages
To deploy to GitHub pages, check out the file at `.github/workflows/update-website.yml`. It is possible to add a recurring schedule to periodically push a new bookshelf website. To do that, add the following:

```yaml
on:
    schedule:
        - cron: "0 12 * * *"
```

To update the bookshelf every day at 12. See [this link](https://github.com/dunnkers/bookshelf/blob/master/.github/workflows/update-website.yml#L4-L5) for a workflow using this schedule.

## About
Built by [Jeroen Overschie](https://jeroenoverschie.nl/).