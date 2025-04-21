# [Naively Indexed](https://naively-indexed.netlify.app/ )

持っている知識をチェックボックスで入力し、共有するためのシステム。

## Usages

### 学ぶ前

#### 学ぶ側

- [x] 知っている知識全てにチェックを付ける。
- [ ] 知識データファイルをエクスポートし、教える側に送る。

#### 教える側

- [ ] 教えたい内容にチェックを付ける。
- [ ] 送られてきたファイル群をインポートする。
- [ ] ハイライトされている項目(学ぶ側にとって既習である項目)のチェックを外す。
      残った項目が教えるべき項目。

### 学んだ後

#### 教える側

- [ ] データファイルをエクスポートし、学ぶ側に送る。

#### 学ぶ側

- [ ] データファイルをインポートする。学んだ項目にチェックが付く。

## Contribute

### チェックリストの新設

`src/content/data/<分野>/<科目>.json`というファイルを作り、中に以下のような形式で達成項目を記述する。

```json:src/content/data/mathematics/elementaryAnalysis.json
{
  "title": {
    "en": "Elementary Analysis",
    "ja": "初等解析"
  },
  "items": [
    {
      "id": "differentiation_of_polynomials",
      "label": {
        "en": "Differentiation of Polynomials",
        "ja": "多項式の微分"
      }
    },
    {
      "id": "differentiation_of_trigonometric_functions",
      "label": {
        "en": "Differentiation of Trigonometric Functions",
        "ja": "三角関数の微分"
      }
    }
  ]
}
```

達成項目は、原則として以下にあてはまるものとする。

- 科目の達成進度を把握する上で有用なもの。
- 教科書、参考書などで、見出しとなりうるもの。
- 有名な値や概念、方程式の定義。

