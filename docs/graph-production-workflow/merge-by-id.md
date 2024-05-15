# Merge by id

In the metadata aggregation system it is common to find the same record provided by 
different datasources and, sometimes, even inside the same datasource (especially in 
case of aggregators). As the harmonisation processes are performed per datasource 
contents, the relative records are the output of different mapping implementations. 
This approach has the advantage to be deeply customisable to catch datasource specific 
aspects, but it leaves room for inconsistencies when evaluating the different mappings 
across the various datasources.

This phase is therefore responsible to compensate for such inconsistencies and performs
a global grouping of every record available in the graph:

- entities are grouped by [`id`](../data-model/entities/research-product#id)
- relations are grouped by [`source`, `target`, `reltype`](../data-model/relationships/relationship-object)

This ensures that the same record, possibly assigned to different types by different 
mappings, appears only once in the graph and under a single typing. In case of clashing 
identifiers, the properties are merged (including the provenance information), considering 
the following precedence order for the research product typing:

```
publication > dataset > software > other
```

The same holds for relationships, as the same (e.g.) DOI-to-DOI citation relation could 
be aggregated from multiple sources, this grouping phase would collapse all the different 
duplicates onto a single relation that would however include all the individual provenances.
