# 排序

在多路召回场景下，不同召回源的物料优先级整合成为关键挑战。排序阶段的演进路径通常遵循：初期采用规则策略 → 中期加入通道优先级 → 后期实现模型化排序的技术路线。

## 规则排序（Rule-based Ranking）

### 核心原理

通过人工定义的特征线性组合公式进行排序决策，典型公式结构：  
`得分 = 特征A*权重 + 特征B*权重`  
（示例：商品排序得分 = 曝光量*0.4 + 点击量*0.6）

### 配置规范

```toml
[Pipeline.Rank]
name = "sales_rank"  # 策略唯一标识（全局不可重复）
rank_type = 0        # 排序类型标识（0=公式排序）
rule = "{view}*0.4 + {click}*0.6"  # 支持特征字段的动态插值
```

### 适用场景

冷启动阶段快速验证  
特征维度简单明确时  
人工经验强相关的业务场景

## 通道优先级排序（Channel Priority Ranking）

### 经验准则

基于业务数据观测，不同召回通道的CTR表现呈现显著差异。例如历史数据显示：  
ICF召回CTR > DSSM召回CTR > 热门榜单CTR

### 配置模板

```toml
[Pipeline.Rank]
name = "channel_priority"  
rank_type = 1                # 排序类型标识（1=通道优先级） 
rule = ["icf", "dssm", "hot"] # 按优先级降序排列的召回通道名称
```

### 注意事项

• 需定期更新通道优先级排序  
• 建议结合AB测试验证效果  
• 需与召回阶段通道命名严格对齐

## 模型排序（Model-based Ranking）

### 技术演进

排序模型发展路径：  
逻辑回归（LR）→ 因子分解机（FM）→ 域感知FM（FFM）→ 深度神经网络（DNN）

### 服务化配置

```toml
[Pipeline.Rank]
name = "dn_rank"    
rank_type = 2                # 排序类型标识（2=模型服务）
endpoint = "http://model-serving:8501"  # 模型服务端点
```
