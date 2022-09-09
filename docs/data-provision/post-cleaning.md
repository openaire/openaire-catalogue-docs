---
sidebar_position: 4
---

# Post-cleaning

The aggregation processes are continuously running and apply vocabularies as they are in a given moment of time. It could be the case that a vocabulary changes after the aggregation of one data source has finished, thus the aggregated content does not reflect the current status of the controlled vocabularies.

In addition, the integration of ScholeXplorer and DOIBoost and some enrichment processes applied on the raw and on the de-duplicated graph may introduce values that do not comply with the current status of the OpenAIRE controlled vocabularies. For these reasons, we included a final step of cleansing at the end of the workflow materialisation. The output of the final cleansing step is the final version of the OpenAIRE Research Graph.