# API 定义
## 用户

### 用户属性
我们需要明确知道用户有哪些属性和其属性类型，在推荐的时候把这些属性传递过来

### 添加属性
#### API 端点名称
Method: PUT

PATH:  /{project_id}/users/properties/{propertyName}?type=<string>
#### 参数

| 参数名称       | 类型     | 位置   | 必填 | 描述与约束                                                                                                                                         |
|----------------|----------|--------|------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| `project_id`    | string   | path   | Yes  |                                                                                                                                      |
| `propertyName` | string   | path   | Yes  | 要创建的属性名称。<br>满足正则表达式 ^u_[a-zA-Z0-9_-]+$ ⚠️ 保留名称（大小写不敏感）：`id`, `itemid`。<br>⛔ 长度限制：不超过63字符。                                                  |
| `type`         | string   | query  | Yes  | 属性值类型，可选值：<br>`int`（64位有符号整数）、<br>`float`（单精度浮点）、<br>`str`（UTF-8字符串）、<br>`list_int`（整型数组）、<br>`list_float`（浮点型数组）、<br>`list_str`（字符串数组）|

#### 响应

| 状态码 | 描述               |
|--------|--------------------|
| 201    | 操作成功完成       |
| 400    | 输入参数不满足^u_[a-zA-Z0-9_-]+$ ,或者类型错误      |

#### 删除属性
删除项目属性大致相当于从项目表中删除一列。
#### API 端点名称
Method: DELETE

PATH:  /{project_id}/users/properties/{propertyName}

| 状态码 | 描述               |
|--------|--------------------|
| 201    | 操作成功完成       |
| 400    | 输入参数不满足^u_[a-zA-Z0-9_-]+$      |
| 404    | 数据库中不存在给定名称的属性。     |

## 物料

### 物料属性
我们需要定义物料有哪些属性有哪些，这些属性的类型是什么

### 添加属性
#### API 端点名称
Method: PUT

PATH:  /{project_id}/items/properties/{propertyName}?type=<string>
#### 参数

| 参数名称       | 类型     | 位置   | 必填 | 描述与约束                                                                                                                                         |
|----------------|----------|--------|------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| `project_id`    | string   | path   | Yes  |                                                                                                                                      |
| `propertyName` | string   | path   | Yes  | 要创建的属性名称。<br>满足正则表达式 ^i_[a-zA-Z0-9_-]+$ ⚠️ 保留名称（大小写不敏感）：`id`, `itemid`。<br>⛔ 长度限制：不超过63字符。                                                  |
| `type`         | string   | query  | Yes  | 属性值类型，可选值：<br>`int`（64位有符号整数）、<br>`float`（单精度浮点）、<br>`str`（UTF-8字符串）、<br>`list_int`（整型数组）、<br>`list_float`（浮点型数组）、<br>`list_str`（字符串数组）|

#### 响应

| 状态码 | 描述               |
|--------|--------------------|
| 201    | 操作成功完成       |
| 400    | 输入参数不满足^i_[a-zA-Z0-9_-]+$ ,或者类型错误      |

#### 删除属性
删除项目属性大致相当于从项目表中删除一列。
#### API 端点名称
Method: DELETE

PATH:  /{project_id}/items/properties/{propertyName}

| 状态码 | 描述               |
|--------|--------------------|
| 201    | 操作成功完成       |
| 400    | 输入参数不满足^i_[a-zA-Z0-9_-]+$       |
| 404    | 数据库中不存在给定名称的属性。     |

### 物料同步
批量同步物料到推荐系统、这里会增量覆盖更新单条物料信息


Method: PUT

PATH: /\{project_id\}/items/batch_sync

**Body**:
```json
[
    {
        "id":"必须包含主键[id]",
        "propertyName1":"prop1_value",
        "propertyName2":1,
        "propertyName3":[1,2],
        "propertyName4":[1.0,2],
        "propertyName4":["s","2"],
        
    }
]
```

| 状态码 | 描述               |
|----------------|--------------------|
| 201    | 操作成功完成       |
| 400    | 输入参数错误，存在非法的 propertyName4 或者类型检测错误    |


### 物料删除
批量删除物料


Method: DELETE

PATH: /\{project_id\}/items/batch_delete

**Body**:
```json
[
    "id1","id2"
]
```

| 状态码 | 描述               |
|--------|--------------------|
| 201    | 操作成功完成       |

## 用户行为

### 电商领域


### 
## 推荐

### 获取推荐物料

Method: POST
PATH:  /{project_id}/recommend/items

**Request Body**:
```json
{
    "user_id":"用户id",
    "device_id":"设备id",
    "pageno":1,
    "count":10,
    "relate_item":"",
    "trace_id":"trace_id",
    "scene":"scene",
    "pipeline":"pipeline",
    "exclude_items":["item_id1","item_id2"],
    "filter_condition":"",
    "user_feature":{
        "u_s_coutry":"us",
        "u_s_age":1,
        "u_s_gender":1,
        "u_d_tags":["tag1","tag2"],
        "u_d_embedding":[1.0,2.0,3.0],
        "u_d_int_list":[1,2,3]
    },
}
```

| 状态码 | 描述               |
|--------|--------------------|
| 200   |       |