# Citation-based impact indicators

This page summarises all calculated citation-based impact indicators, provided by [BIP!](https://bip.imsi.athenarc.gr/), which are included in the [bipIndicators](../../data-model/entities/other#bipindicators) property (found under the [indicators](../../data-model/entities/research-product#indicators) property of the reseach product).

It should be noted that the citation-based impact indicators are being calculated on the level of the research output.
Below we explain their main intuition, the way they are calculated, and their most important limitations, in an attempt help avoiding common pitfalls and misuses.


## Citation Count (CC) <small><span className="bip-indicator-names">&bull; influence_alt</span></small>

***Short description:***
This is the most widely used citation-based impact indicator, which sums all citations received by each article.
Citation count can be viewed as a measure of a publication's overall (citation-based) impact, since it conveys the number of other works that directly 
drew on it.

***Algorithmic details:***
The citation count of a 
publication $i$ corresponds to the in-degree of the corresponding node in the underlying citation network: $s_i = \sum_{j} A_{i,j}$, 
where $A$ is the adjacency matrix of the network (i.e., $A_{i,j}=1$ when paper $j$ cites paper $i$, while $A_{i,j}=0$ otherwise). 

***Parameters:*** -

***Limitations:***
OpenAIRE collects data from specific data sources which means that part of the existing literature may not be considered when computing this indicator.
Also, since some indicators require the publication year for their calculation, we consider only research products for which we can gather this information from at least one data source.

***Environment:*** PySpark

***References:*** -

***Authority:*** ATHENA RC &bull; ***License:*** GPL-2.0 &bull; ***Code:*** [BIP! Ranker](https://github.com/athenarc/Bip-Ranker)


## "Incubation" Citation Count (iCC) <small><span className="bip-indicator-names">&bull; impulse</span></small>

***Short description:***
This measure is essentially a time-restricted version of the citation count, where the time window is distinct for each paper, i.e., 
only citations $y$ years after its publication are counted.

***Algorithmic details:***
The "incubation" citation count of a paper $i$ is 
calculated as: $s_i = \sum_{j,t_j \leq t_i+y} A_{i,j}$, where $A$ is the adjacency matrix and $t_j, t_i$ are the citing and cited paper's 
publication years, respectively. $t_i$ is cited paper $i$'s publication year. iCC can be seen as an indicator of a paper's initial momentum 
(impulse) directly after its publication.

***Parameters:*** 
$y=3$

***Limitations:***
OpenAIRE collects data from specific data sources which means that part of the existing literature may not be considered when computing this indicator.
Also, since some indicators require the publication year for their calculation, we consider only research products for which we can gather this information from at least one data source.

***Environment:*** PySpark

***References:*** 
* Vergoulis, T., Kanellos, I., Atzori, C., Mannocci, A., Chatzopoulos, S., Bruzzo, S. L., Manola, N., & Manghi, P. (2021, April). Bip! db: A dataset of impact measures for scientific publications. In Companion Proceedings of the Web Conference 2021 (pp. 456-460).

***Authority:*** ATHENA RC &bull; ***License:*** GPL-2.0 &bull; ***Code:*** [BIP! Ranker](https://github.com/athenarc/Bip-Ranker)


 ## PageRank (PR) <small><span className="bip-indicator-names">&bull; influence</span></small>

***Short description:***
Originally developed to rank Web pages, PageRank has been also widely used to rank publications in citation
networks. In this latter context, a publication's PageRank 
score also serves as a measure of its influence.

***Algorithmic details:***
The PageRank score of a publication is calculated 
as its probability of being read by a researcher that either randomly selects publications to read or selects 
publications based on the references of her latest read. Formally, the score of a publication $i$ is given by: 

$$
s_i = \alpha \cdot \sum_{j} P_{i,j} \cdot s_j + (1-\alpha) \cdot \frac{1}{N}
$$

where $P$ is the stochastic transition matrix, which corresponds to the column normalised version of adjacency 
matrix $A$, $\alpha \in [0,1]$, and $N$ is the number of publications in the citation network. The first addend 
of the equation corresponds to the selection (with probability $\alpha$) of following a reference, while the 
second one to the selection of randomly choosing any publication in the network. It should be noted that the 
score of each publication relies of the score of publications citing it (the algorithm is executed iteratively 
until all scores converge). As a result, PageRank differentiates citations based on the importance of citing 
articles, thus alleviating the corresponding issue of the Citation Count.

***Parameters:*** 
$\alpha = 0.5, convergence\_error = 10^{-12}$

***Limitations:***
OpenAIRE collects data from specific data sources which means that part of the existing literature may not be considered when computing this indicator.
Also, since some indicators require the publication year for their calculation, we consider only research products for which we can gather this information from at least one data source.

***Environment:*** PySpark

***References:*** 
* Page, L., Brin, S., Motwani, R., & Winograd, T. (1999). The PageRank citation ranking: Bringing order to the web. Stanford InfoLab.

***Authority:*** ATHENA RC &bull; ***License:*** GPL-2.0 &bull; ***Code:*** [BIP! Ranker](https://github.com/athenarc/Bip-Ranker)
 

## RAM <small><span className="bip-indicator-names">&bull; popularity_alt</span></small>

***Short description:***
RAM is essentially a modified Citation Count, where recent citations are considered of higher importance compared to older ones.
Hence, it better captures the popularity of publications. This "time-awareness" of citations 
alleviates the bias of methods like Citation Count and PageRank against recently published articles, which have 
not had "enough" time to gather as many citations.

***Algorithmic details:***
The RAM score of each paper $i$ is calculated as follows:

$$
s_i = \sum_j{R_{i,j}}
$$

where $R$ is the so-called Retained Adjacency Matrix (RAM) and $R_{i,j}=\gamma^{t_c-t_j}$ when publication $j$ cites publication 
$i$, and $R_{i,j}=0$ otherwise. Parameter $\gamma \in (0,1)$, $t_c$ corresponds to the current year and $t_j$ corresponds to the 
publication year of citing article $j$.

***Parameters:*** 
$\gamma = 0.6$

***Limitations:***
OpenAIRE collects data from specific data sources which means that part of the existing literature may not be considered when computing this indicator.
Also, since some indicators require the publication year for their calculation, we consider only research products for which we can gather this information from at least one data source.

***Environment:*** PySpark

***References:*** 
* Ghosh, R., Kuo, T. T., Hsu, C. N., Lin, S. D., & Lerman, K. (2011, December). Time-aware ranking in dynamic citation networks. In 2011 ieee 11^{th} international conference on data mining workshops (pp. 373-380). IEEE.

***Authority:*** ATHENA RC &bull; ***License:*** GPL-2.0 &bull; ***Code:*** [BIP! Ranker](https://github.com/athenarc/Bip-Ranker)


## AttRank <small><span className="bip-indicator-names">&bull; popularity</span></small>

***Short description:***
AttRank is a PageRank variant that alleviates its bias against recent publications (i.e., it is tailored to capture popularity). 
AttRank achieves this by modifying PageRank's probability of randomly selecting a publication. Instead of using a uniform probability,
AttRank defines it based on a combination of the publication's age and the citations it received in recent years.

***Algorithmic details:***
The AttRank score 
of each publication $i$ is calculated based on:

$$
s_i = \alpha \cdot \sum_{j} P_{i,j} \cdot s_j
    + \beta \cdot Att(i)+ \gamma \cdot c \cdot e^{-\rho \cdot (t_c-t_i)}
$$

where $\alpha + \beta + \gamma =1$ and $\alpha,\beta,\gamma \in [0,1]$. $Att(i)$ denotes a recent attention-based score for publication $i$, 
which reflects its share of citations in the $y$ most recent years, $t_i$ is the publication year of article $i$, $t_c$ denotes the current 
year, and $c$ is a normalisation constant. Finally, $P$ is the stochastic transition matrix.

***Parameters:*** 
$\alpha = 0.2, \beta = 0.5, \gamma = 0.3, \rho = -0.16, convergence\_error = 10^-{12}$

Note that recent attention is based on the 3 most recent years (including current one).

***Limitations:***
OpenAIRE collects data from specific data sources which means that part of the existing literature may not be considered when computing this indicator.
Also, since some indicators require the publication year for their calculation, we consider only research products for which we can gather this information from at least one data source.

***Environment:*** PySpark

***References:*** 
* Kanellos, I., Vergoulis, T., Sacharidis, D., Dalamagas, T., & Vassiliou, Y. (2021, April). Ranking papers by their short-term scientific impact. In 2021 IEEE 37th International Conference on Data Engineering (ICDE) (pp. 1997-2002). IEEE.

***Authority:*** ATHENA RC &bull; ***License:*** GPL-2.0 &bull; ***Code:*** [BIP! Ranker](https://github.com/athenarc/Bip-Ranker)

 