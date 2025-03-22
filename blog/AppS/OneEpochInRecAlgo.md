# The One Epoch Phenomenon in Recommendation Algorithms

In the field of Click-Through Rate (CTR) prediction and recommendation systems, the "ONE EPOCH phenomenon" refers to the overfitting phenomenon where deep models achieve optimal generalization performance after only one epoch of training, and continued training leads to a sharp decline in performance on the test set.

## Phenomenon Characteristics

- Performance During Training‌
  
The model reaches a peak AUC on the test set at the end of the first epoch, and performance rapidly declines after the start of the second epoch.
Overfitting manifests as a continuous decrease in training loss, but validation set metrics (such as AUC) significantly deteriorate after one epoch.

- Relevance to Industrial Practice‌
  
This phenomenon explains why many industrial-grade recommendation systems stop training after only one epoch of data, rather than following the multiple iterations typical of traditional deep learning.
<center>
<img title="" src="../../static/images/one-epoch-1.png" alt="" width="268" data-align="center">
<img title="" src="../../static/images/one-epoch-2.png" alt="" width="261" data-align="center">
</center>

## Key Causes

- Feature Sparsity‌

**The high number of IDs in feature domains** (such as user IDs, product IDs) results in extremely low frequencies of occurrence for each ID, making the model prone to memorizing sparse samples rather than generalizing.
The Embedding layer corresponding to sparse features overfits low-frequency IDs during multiple training epochs.

- Model Optimization Characteristics‌

**Strong optimizers (such as Adam) and larger learning rates** accelerate convergence, enabling the model to complete effective learning within one epoch, with subsequent training falling into local overfitting.
Complex model structures (such as deep networks) with excessive capacity exacerbate the memorization of noise/sparse features.

## Mitigation Strategies

- Feature Engineering Optimization‌

Reduce Sparsity‌: Merge low-frequency IDs, use default values to replace sparse IDs, reduce hash space.
Dynamic Feature Filtering‌: Dynamically adjust the participation intensity of sparse features based on the training stage.

- Training Parameter Adjustment‌

Limit Training Epochs‌: Force training to stop after only one epoch.
Learning Rate Control‌: Use a smaller initial learning rate or a learning rate decay strategy.

- Model Structure Improvement‌

Simplify the Embedding layer or introduce regularization (such as Dropout) to suppress overfitting.

## Insights from Industrial Practice

- Strong Correlation with Data Distribution‌

This phenomenon is particularly significant in high-sparsity business scenarios (such as advertising recommendations, e-commerce CTR prediction), but rarely occurs in dense data tasks.

- Priority of Optimization Directions‌

The industrial community tends to directly avoid the problem through feature engineering and early stopping strategies, rather than modifying the model structure.

## Theoretical Hypotheses

Some studies suggest that the ONE EPOCH phenomenon may stem from the dynamic balance between sample memorization and generalization: in the first epoch, the model completes coarse-grained learning of key features, and subsequent training disrupts generalization ability due to over-refinement of local features.

## Further Reading
[Towards Understanding the Overfitting Phenomenon of Deep Click-Through Rate Prediction Models](https://arxiv.org/pdf/2209.06053)

[Ali's OneEpoch VS KuaiShou's MultiEpoch](https://zhuanlan.zhihu.com/p/669063912)