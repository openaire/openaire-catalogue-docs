# OpenAIRE Catalogue Documentation

This website is built using [Docusaurus 2](https://docusaurus.io/); please check [here](https://docusaurus.io/docs/installation#requirements) the requirements to run the project.



## Local installation and development

From https://docusaurus.io/docs/installation#requirements 
> Node.js version 16.14 or above (which can be checked by running node -v) 

Clone the repository:
```
git clone https://code-repo.d4science.org/D-Net/openaire-graph-docs.git
```
NOTE: please use git branches for introducing new changes.

Install the required packages:
```
npm install
```

Start a local development server (opens in a new browser window). 
```
npm run start
```
NOTE: most changes are reflected live without having to restart the server.


Before issuing a Pull Request, please ensure that the following command runs successfully:
```
npm run build
```
NOTE: This command generates the static content into the `build` directory. 
Then this output directory is issued to deploy the documentation website.

## Deployment using Docker

### Development

Build docker container for development and run on port 3000:
```
docker build --target development -t docs:dev .
sudo docker run -d -p 3000:3000 docs:dev
```

### Production

Build docker container for production and run on port 80:
```
docker build -t docs:latest .
docker run -d -p 80:80 docs:latest
```

## Documentation versioning 
The versioning documentation of Docusaurus can be found [here](https://docusaurus.io/docs/versioning).
Specifically, a new version can be created with the following command: 
```
npm run docusaurus docs:version <versionName>
```

When tagging a new version, the document versioning mechanism will:

* Copy the full `docs/` folder contents into a new `versioned_docs/version-<versionName>/` folder.
* Create a versioned sidebars file based from your current sidebar configuration, saved as `versioned_sidebars/version-<versionName>-sidebars.json`.
* Append the new version number to `versions.json`.

Therefore, when previewing the compiled site locally with `npm run start`, ensure to visualise the `Next` version on the browser as it shows the changes under `/docs`.
To change a version that was already versioned, the source files to be modified are in the `versioned_docs/version-<versionName>/` folder.
