---
sidebar_position: 2
---

# Impact scores
<span className="todo">TODO - add intro</span>

## Citation Count (CC)

This is the most widely used scientific impact indicator, which sums all citations received by each article. The citation count of a 
publication $i$ corresponds to the in-degree of the corresponding node in the underlying citation network: $s_i = \sum_{j} A_{i,j}$, 
where $A$ is the adjacency matrix of the network (i.e., $A_{i,j}=1$ when paper $j$ cites paper $i$, while $A_{i,j}=0$ otherwise). 
Citation count can be viewed as a measure of a publication's overall impact, since it conveys the number of other works that directly 
drew on it.

## "Incubation" Citation Count (iCC)

This measure is essentially a time-restricted version of the citation count, where the time window is distinct for each paper, i.e., 
only citations $y$ years after its publication are counted (usually, $y=3$). The "incubation" citation count of a paper $i$ is 
calculated as: $s_i = \sum_{j,t_j \leq t_i+3} A_{i,j}$, where $A$ is the adjacency matrix and $t_j, t_i$ are the citing and cited paper's 
publication years, respectively. $t_i$ is cited paper $i$'s publication year. iCC can be seen as an indicator of a paper's initial momentum 
(impulse) directly after its publication.

## PageRank (PR)

Originally developed to rank Web pages, PageRank has been also widely used to rank publications in citation
networks. In this latter context, a publication's PageRank 
score also serves as a measure of its influence. In particular, the PageRank score of a publication is calculated 
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

## RAM

RAM is essentially a modified Citation Count, where recent citations are considered of higher importance compared 
to older ones. Hence, it better captures the popularity of publications. This "time-awareness" of citations 
alleviates the bias of methods like Citation Count and PageRank against recently published articles, which have 
not had "enough" time to gather as many citations. The RAM score of each paper $i$ is calculated as follows:

$$
s_i = \sum_j{R_{i,j}}
$$

where $R$ is the so-called Retained Adjacency Matrix (RAM) and $R_{i,j}=\gamma^{t_c-t_j}$ when publication $j$ cites publication 
$i$, and $R_{i,j}=0$ otherwise. Parameter $\gamma \in (0,1)$, $t_c$ corresponds to the current year and $t_j$ corresponds to the 
publication year of citing article $j$.

## AttRank

AttRank is a PageRank variant that alleviates its bias against recent publications (i.e., it is tailored to capture popularity). 
AttRank achieves this by modifying PageRank's probability of randomly selecting a publication. Instead of using a uniform probability,
AttRank defines it based on a combination of the publication's age and the citations it received in recent years. The AttRank score 
of each publication $i$ is calculated based on:

$$
s_i = \alpha \cdot \sum_{j} P_{i,j} \cdot s_j
    + \beta \cdot Att(i)+ \gamma \cdot c \cdot e^{-\rho \cdot (t_c-t_i)}
$$

where $\alpha + \beta + \gamma =1$ and $\alpha,\beta,\gamma \in [0,1]$. $Att(i)$ denotes a recent attention-based score for publication $i$, 
which reflects its share of citations in the $y$ most recent years, $t_i$ is the publication year of article $i$, $t_c$ denotes the current 
year, and $c$ is a normalisation constant. Finally, $P$ is the stochastic transition matrix.