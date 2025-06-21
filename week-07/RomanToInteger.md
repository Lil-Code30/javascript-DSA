The **Roman to Integer** conversion is the process of converting a Roman numeral (like `"XIV"`) into its corresponding integer value (like `14`). Here’s how the concept works:

---

### 🏛️ Roman Numerals Basics

Each Roman numeral has a specific integer value:

- `I` → 1
- `V` → 5
- `X` → 10
- `L` → 50
- `C` → 100
- `D` → 500
- `M` → 1000

---

### ➕ Standard Addition Rule

In general, **you add** the values of the symbols from left to right.

Example:
`VI` = `5 + 1` = **6**

---

### ➖ Subtraction Rule

If a **smaller value comes before a larger value**, then **you subtract** the smaller one.

Example:
`IV` = `5 - 1` = **4**
`XL` = `50 - 10` = **40**

This is called the **subtractive notation**, and it’s used in specific cases like:

- `I` before `V` or `X` (e.g., `IV = 4`, `IX = 9`)
- `X` before `L` or `C` (e.g., `XL = 40`, `XC = 90`)
- `C` before `D` or `M` (e.g., `CD = 400`, `CM = 900`)

---

### 🧠 Conversion Logic

To convert a Roman numeral to an integer:

1. **Read the Roman string from left to right.**
2. For each symbol:

   - If the **next symbol** represents a **larger value**, **subtract** the current value.
   - Otherwise, **add** the current value.

3. Continue until the end of the string.
4. Sum gives the integer result.

---

### ⚠️ Important to Remember

- Roman numerals are written in descending order, **except** when using subtractive notation.
- There are only a few valid subtractive pairs (like `IV`, `IX`, `XL`, etc.).

---
