# OpenAIRE Graph Documentation

This website is built using [Docusaurus 2](https://docusaurus.io/); please check [here](https://docusaurus.io/docs/installation#requirements) the requirements to run the project.

## Clone repository
```
$ git clone https://code-repo.d4science.org/D-Net/openaire-graph-docs.git
```

## Local installation and deployment

From https://docusaurus.io/docs/installation#requirements 
> Node.js version 16.14 or above (which can be checked by running node -v) 



To install the required packages use:
```
$ npm install
```

The following command starts a local development server and opens up a browser window. Note that most changes are reflected live without having to restart the server.
```
$ npm run start
```

Generate the static content into the `build` directory using the command tha follows. Then this directory can be served using any static contents hosting service.

```
$ npm run build
```

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
