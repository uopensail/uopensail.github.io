# Application of the ESMM Model in AppS

In modern recommendation systems, particularly within the AppS business environment, predicting user behaviors such as Click-Through Rate (CTR) and Conversion Rate (CVR) is crucial for enhancing user satisfaction and driving business growth. The ESMM model, with its unique architecture and efficient multi-task learning capability, offers an outstanding solution for the AppS business.

<center>
<img title="" src="../../static/images/ESMM-origin.webp" alt="" width="400" data-align="center">
</center>

## Introduction

ESMM, short for Entire Space Multi-task Model, is a multi-task learning model specifically designed to tackle problems related to ad recommendations and user behavior prediction. The core idea of ESMM is to enhance the overall performance of the model by simultaneously learning multiple related tasks. This approach not only shares potential information between different tasks but also effectively alleviates the issue of data sparsity.

The ESMM model is typically applied to predict CTR and CVR. Traditional methods often train two separate models to predict CTR and CVR, whereas ESMM simultaneously performs these two prediction tasks within a unified framework, thereby capturing the correlation between them more effectively.

To learn more about the foundational concepts of ESMM, you can read this [academic paper on ESMM](https://arxiv.org/abs/1804.07931).

### Major Advantages of ESMM

- **Data Efficiency**: By sharing the feature space, ESMM can better utilize data, especially in sparse data scenarios.
- **Performance Enhancement**: By jointly learning multiple tasks, ESMM can better capture the mutual influences between related tasks, improving the accuracy of predictions.
- **Simplified Architecture**: Compared to training multiple models independently, ESMM provides a more streamlined and efficient solution.

### Differences Between ESMM and MMOE

In multi-task learning, besides ESMM, there is another popular model known as MMOE (Multi-gate Mixture-of-Experts). Both MMOE and ESMM aim to enhance the performance of multiple tasks by sharing information, but they exhibit significant differences in architecture and application scenarios:

#### Architectural Differences

- **ESMM**: ESMM conducts multi-task learning by sharing the entire feature space. It primarily uses a unified network structure to simultaneously predict multiple tasks (such as CTR and CVR) and enhances overall performance by sharing underlying features.

- **MMOE**: MMOE employs a more complex structure by introducing multiple expert networks and gating mechanisms to dynamically select suitable features and model paths for each task. Each task has its own gating network to select the most relevant information from multiple experts.

#### Application Scenarios

- **ESMM**: Suitable for scenarios where tasks are highly related and require extensive information sharing, particularly when data is sparse and efficient information utilization is needed.

- **MMOE**: More flexible and applicable to scenarios where task correlations are weaker or personalized feature selection is required. Due to its complex selection mechanism, MMOE performs better in situations with conflicting task requirements.

#### Performance Aspects

- **ESMM**: Provides stable performance improvements between related tasks through its simplified network architecture and efficient feature sharing.

- **MMOE**: Capable of offering higher prediction accuracy in complex task environments through flexible expert selection mechanisms, especially when task requirements are diverse.

## Application

### Similarity in Basic Structure Between ESMM and MMOE

The ESMM model shares many structural similarities with the traditional MMOE model. Both employ a multi-task learning framework to enhance the performance of different tasks by sharing information. However, the ESMM model adopts a different approach in the final conversion rate prediction: it calculates the predicted Conversion Rate (pCVR) as the product of two towers, a design aimed at fully capturing the interaction between CTR and CVR.

### Key Components of the ESMM Model

<center>
<img title="" src="../../static/images/ESMM.webp" alt="" width="400" data-align="center">
</center>

#### Two Expert Networks

When applied to the AppS business, ESMM uses two expert networks. These expert networks are responsible for handling features related to CTR and CVR tasks, respectively. Through specialized network structures, ESMM can better extract and utilize task-specific information, thereby enhancing prediction accuracy.

#### Two Gating Mechanisms

In addition to expert networks, ESMM also employs two gating mechanisms to control the CTR and CVR tasks separately. These gating mechanisms dynamically adjust the selection and utilization of features for each task, ensuring that each task receives the most suitable information flow. Through optimization of gating mechanisms, ESMM provides more precise results in complex user behavior predictions.

## Experimental Results and Effects

In practical applications within the AppS business, the ESMM model has demonstrated significant results through A/B testing. In the "Guess You Like" module, the ESMM model successfully achieved a 6.45% increase in average distribution per user.

<center>
<img title="" src="../../static/images/ESMM-AB.png" alt="" width="522" data-align="center">
</center>

## Further Reading

[Entire Space Multi-Task Model: An Effective Approach for Estimating ... - arXiv](https://arxiv.org/abs/1804.07931)

[ESMM &mdash; easy_rec 0.8.5 documentation](https://easyrec.readthedocs.io/en/latest/models/esmm.html)

[GitHub - dai08srhg/ESMM: PyTorch implementation of Entire Space Multitask Model (ESMM)](https://github.com/dai08srhg/ESMM)
