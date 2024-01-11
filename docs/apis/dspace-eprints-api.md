# Dspace & EPrints API
<!-- Bulk access to projects -->

The APIs offer custom access to metadata about projects funded by a selection of international funders for the **DSpace** and **EPrints** platforms. The currently supported funders and relative codes are:  

*   **FP7:** The 7th Framework Programme funded by the European Commission
*   **H2020:** Horizon2020 Programme funded by the European Commission
*   **HE:** Horizon Europe Programme funded by the European Commission
*   **AKA:** Academy of Finland
*   **ARC:** Australian Research Council
*   **FWF:** Austrian Science Foundation
*   **CHISTERA:** CHIST-ERA
*   **CIHR:** Canadian Institutes of Health Research
*   **HRZZ:** Croatian Science Foundation
*   **EEA:** European Environemnt Agency
*   **ANR:** French National Research Agency
*   **FCT:** The funding programme of Fundação para a Ciência e a Tecnologia, the national funding agency of Portugal
*   **MESTD:** The Ministry of Education, Science and Technological Development of Serbia
*   **MZOS:** Ministry of Science, Education and Sports of the Republic of Croatia
*   **NHMRC:** Australian National Health and Medical Research Council
*   **NIH:** US National Institutes of Health
*   **NSF:** US National Science Foundation
*   **NSERC:** Natural Sciences and Engineering Research Council of Canada
*   **NWO:** The Netherlands Organisation for Scientific Research
*   **SFI:** Science Foundation Ireland
*   **SSHRC:** Social Sciences and Humanities Research Council
*   **SNSF:** Swiss National Science Foundation
*   **TARA:** Tara Expeditions Foundation
*   **TUBITAK:** The National funder of Turkey
*   **UKRI:** United Kingdom Research and Innovation
*   **WT:** Wellcome Trust

## DSpace/ePrints

DSpace endpoint: http://api.openaire.eu/projects/dspace/$fundingStream/ALL/ALL

ePrints endpoint: http://api.openaire.eu/projects/eprints/$fundingStream/ALL/ALL

The URLs embed the parameters needed to collect projects funded by specific funding stream, where the pattern is FundingStream/FundingSubStream/FundingSubSubStream.  
Additional parameters can be concatenated to the URL to refine the results by date (date must be in the form `YYYY-MM-DD`):

*   startFrom
*   startUntil
*   endFrom
*   endUntil

## Examples

Get Wellcome Trust projects for EPrints: [http://api.openaire.eu/projects/eprints/WT/ALL/ALL](http://api.openaire.eu/projects/eprints/WT/ALL/ALL)  
Get EC-FP7 projects of the specific programme “SP2-IDEAS” for EPrints: [http://api.openaire.eu/projects/eprints/FP7/SP2/ALL](http://api.openaire.eu/projects/eprints/FP7/SP2/ALL)  
Get EC-FP7 projects for DSpace that started after the given date: [http://api.openaire.eu/projects/dspace/FP7/ALL/ALL?startFrom=2011-01-01](http://api.openaire.eu/projects/dspace/FP7/ALL/ALL?startFrom=2011-01-01).  

## Terms of Use and SLA

APIs are free-to-use (no sign-up needed) by any third-party service.

**Metadata license is CC-BY**: the metadata records retuned by the service can be freely re-used by commercial and non-commercial partners under CC-BY license, hence as long as OpenAIRE is acknowledged as data source.

**Quality of Service**: all API services are running in production 24/7 within the OpenAIRE infrastructure premises deployed at the [data center](http://icm.edu.pl/en/centre-of-technology/) facilities of the [Interdisciplinary Centre for Mathematical and Computational Modelling](http://icm.edu.pl/en/) (ICM).

**APIs rate limits**: please check [here](./authenticated-requests).