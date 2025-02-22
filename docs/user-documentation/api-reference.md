# API 定义
## 物料

### 物料属性
我们需要定义物料有哪些属性有哪些，这些属性的类型是什么
#### 添加属性


#### 删除属性

### 物料同步
批量同步物料到推荐系统、这里会增量覆盖更新单条物料信息

Method: POST

PATH: /\{project_id\}/items/sync

**Body**:
```json
[
    {
        "id":"必须包含主键[id]",
        "prop1_key":"prop1_value",
        "prop2_number":1,
        "prop3_bool":0,
        
    }
]
```
