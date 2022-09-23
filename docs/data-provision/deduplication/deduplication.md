# Deduplication

## Clustering 

Clustering is a common heuristics used to overcome the N x N complexity required to match all pairs of objects to identify the equivalent ones. The challenge is to identify a clustering function that maximizes the chance of comparing only records that may lead to a match, while minimizing the number of records that will not be matched while being equivalent. Since the equivalence function is to some level tolerant to minimal errors (e.g. switching of characters in the title, or minimal difference in letters), we need this function to be not too precise (e.g. a hash of the title), but also not too flexible (e.g. random ngrams of the title). On the other hand, reality tells us that in some cases equality of two records can only be determined by their PIDs (e.g. DOI) as the metadata properties are very different across different versions and no clustering function will ever bring them into the same cluster. To match these requirements OpenAIRE clustering for products works with two functions:
* DOI: the function generates the DOI when this is provided as part of the record properties;
* Title-based function: the function generates a key that depends on (i) number of significant words in the title (normalized, stemming, etc.), (ii) module 10 of the number of characters of such words, and (iii) a string obtained as an alternation of the function prefix(3) and suffix(3) (and vice versa) o the first 3 words (2 words if the title only has 2). For example, the title “Entity deduplication in big data graphs for scholarly communication” becomes “entity deduplication big data graphs scholarly communication” with two keys key “7.1entionbig” and “7.1itydedbig” (where 1 is module 10 of 54 characters of the normalized title.
To give an idea, this configuration generates around 77Mi blocks, which we limited to 200 records each (only 15K blocks are affected by the cut), and entails 260Bi matches. Matches in a block are performed using a “sliding window” set to 80 records. The records are sorted lexicographically on a normalized version of their titles. The 1st record is matched against all the 80 following ones, then the second, etc. for an NlogN complexity.

## Matching and election

Once the clusters have been built, the algorithm proceeds with the comparisons. Comparisons are driven by a decisional tree that:
1. Tries to capture equivalence via PIDs: if records share a PID then they are equivalent

2. Tries to capture difference:

  a. If record titles contain different “numbers” then they are different (this rule is subject to different feelings, and should be fine-tuned);

  b. If record contain different number of authors then they are different;

  c. Note that different PIDs do not imply different records, as different versions may have different PIDs.

3. Measures equivalence:

  a. The titles of the two records are normalised and compared for similarity by applying the Levenstein distance algorithm. The algorithm returns a number in the range [0,1], where 0 means “very different” and 1 means “equal”. If the distance is greater than or equal 0,99 the two records are identified as duplicates.

  b. Dates are not regarded for equivalence matching because different versions of the same records should be merged and may be published on different dates, e.g. pre-print and published version of an article.
  
Once the equivalence relationships between pairs of records are set, the groups of equivalent records are obtained (transitive closure, i.e. “mesh”). From such sets a new representative object is obtained, which inherits all properties from the merged records and keeps track of their provenance. The ID of the record is obtained by appending the prefix “dedup_” to the MD5 of the first ID (given their lexicographical ordering). A new, more stable function to generate the ID is under development, which exploits the DOI when one of the records to be merged includes a Crossref or a DataCite record.