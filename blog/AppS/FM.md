# Application of FM Model in AppS

## Introduction

Factorization Machines (FM) are powerful machine learning models, especially widely used in recommendation systems and advertising click-through rate prediction. FM models can effectively capture the cross information between features and are highly efficient and easy to implement in engineering.

<center>
<img title="" src="../../static/images/FM.jpg" alt="" width="400" data-align="center">
</center>

### 1. Advantages of FM over Linear Regression (LR)

Linear Regression (LR) is a simple and intuitive model, but it cannot capture the cross and nonlinear relationships between features. The FM model introduces latent vectors to factorize features, effectively capturing second-order interactions between features. Compared to LR, FM has the following advantages:

- **Feature Interaction**: FM can automatically learn interactions between features without manually constructing cross-features, leading to better performance on complex datasets.
- **Model Flexibility**: FM performs well in highly sparse datasets and is suitable for scenarios with a large number of categorical features.
- **Strong Generalization**: By factorizing features, FM can avoid overfitting, especially when the data is high-dimensional but with a small sample size.

### 2. Time Complexity Analysis of FM

A significant advantage of the FM model is its efficient computational capability. Although FM considers interactions between all pairs of features, its time complexity remains ($O(N)$) rather than ($O(N​^2​​)$). This is because FM simplifies the calculation of feature interactions through factorization as follows:

$\hat{y}(x) = w_0 + \sum_{i=1}^{N}w_ix_i + \sum_{i=1}^{N}\sum_{j=i+1}^{N} \langle v_i, v_j \rangle x_ix_j$

where (⟨v​i​​,v​j​​⟩) denotes the inner product of two feature latent vectors, significantly reducing computational cost. The steps are as follows:

- **Linear Term**: ($\sum_{i=1}^{N}w_ix_i$), with a time complexity of ($O(N)$).
- **Interaction Term**: Through factorization, ($\sum_{i=1}^{N}\sum_{j=i+1}^{N} \langle v_i, v_j \rangle x_ix_j$) can be computed in ($O(N)$) time.

This efficiency allows FM to maintain fast computation speeds even when handling large-scale datasets.

### 3. Ease of Engineering Implementation

The FM model not only has theoretical advantages but is also relatively simple to implement in practice, especially when developed and deployed using deep learning frameworks like PyTorch. Below is a brief explanation and example code of implementing FM using PyTorch:

### Developing and Training FM Model with PyTorch

Developing an FM model with PyTorch is very straightforward, as PyTorch's flexibility and ease of use make customizing model structures and training processes simple. Here is a simplified implementation example of an FM model:

```python
import torch
import torch.nn as nn
import torch.optim as optim

class FactorizationMachine(nn.Module):
    def __init__(self, n_features, k):
        super(FactorizationMachine, self).__init__()
        self.linear = nn.Linear(n_features, 1)
        self.v = nn.Parameter(torch.randn(n_features, k))

    def forward(self, x):
        linear_part = self.linear(x)
        interaction_part = 0.5 * torch.sum(
            torch.pow(torch.mm(x, self.v), 2) - torch.mm(torch.pow(x, 2), torch.pow(self.v, 2)), dim=1, keepdim=True
        )
        return linear_part + interaction_part

# Example usage
n_features = 10  # Assuming 10 features
k = 5  # Dimension of latent vectors

model = FactorizationMachine(n_features, k)
criterion = nn.MSELoss()
optimizer = optim.SGD(model.parameters(), lr=0.01)

# Assuming we have some training data
X_train = torch.randn(100, n_features)  # 100 samples
y_train = torch.randn(100, 1)

# Training process
model.train()
for epoch in range(100):  # Train for 100 epochs
    optimizer.zero_grad()
    outputs = model(X_train)
    loss = criterion(outputs, y_train)
    loss.backward()
    optimizer.step()

    if (epoch+1) % 10 == 0:
        print(f'Epoch [{epoch+1}/100], Loss: {loss.item():.4f}')
```

Through the above code example, it is evident that implementing the FM model with PyTorch is intuitive and flexible. Users can easily adjust model structures, optimizers, and loss functions to quickly adapt to different business needs.

## Application

### 1. Feature Embedding Configuration

In our FM model, the embedding dimension for each feature is set to 10. This configuration allows us to fully capture the interactions between features without adding excessive computational overhead. Choosing the right embedding dimension is a critical step in balancing model complexity and computational efficiency.

### 2. Addressing Sample Imbalance Issues

During the model training process, we found a significant imbalance in the ratio of positive to negative samples, primarily due to the substantial differences in homepage exposure click data. To address this issue, we conducted two experiments:

- **Random Negative Sample Dropping**: This straightforward method aims to balance the sample ratio by reducing the number of negative samples. However, our experiments showed that while this approach can somewhat alleviate the imbalance issue, it does not significantly improve model performance.

- **Positive Sample Weighting**: In contrast, we applied weighting to positive samples, giving them higher learning importance. This method better emphasizes genuine user interest behaviors. By adjusting sample weights, we effectively increased the model's focus on positive samples, leading to a significant improvement in overall model performance.

The experiments demonstrated that positive sample weighting outperforms random negative sample dropping. This is mainly because weighting allows us to more accurately capture user interest preferences, avoiding model bias caused by an excess of negative samples.

### 3. Data Issues and Model Optimization

During the initial model training, we encountered a critical issue: training with the full dataset did not achieve the expected results. Upon thorough investigation, we discovered that many homepage exposures used frontend caching due to network issues. These cached data were not user-initiated actions, thus interfering with the model's learning process.

To resolve this issue, we differentiated the reported data on the first screen, removing the cached data. This approach ensured that the model was trained using genuine user behavior data, ultimately ensuring the effectiveness of the model once deployed.

### 4. AB Testing Results

The effect of online weighting was verified through AB testing. Specific AB test screenshots will be presented here, further proving the effectiveness of our optimization strategies in practical applications. In the **Guess You Like** section on the homepage, the average distribution per person increased by **14.8%**.

<center>
<img title="" src="../../static/images/FM-AB.webp" alt="" width="522" data-align="center">

</center>

## Further Reading

[Factorization Machine models in PyTorch - GitHub](https://github.com/rixwew/pytorch-fm)

[Factorization Machines](https://d2l.ai/chapter_recommender-systems/fm.html)
