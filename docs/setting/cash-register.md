---
sidebar_position: 3
---

# Cash Register

The Cash Register settings let you create and manage the registers (terminals) used in your store. Each register can track its own sales, Z-Reports, and petty cash separately.

---

## Adding a Register

1. Go to **Setting > Cash Register**.
2. Click **"New Cash Register"**.
3. Fill in:
   - **Name**: A label for the register (e.g., "Front Counter", "Range Register").
   - **Description**: Optional notes about the register's purpose or location.
   - **POS Product Categories**: The categories this register shows on the POS. Leave empty to show all. Use this to give the front desk and the back office different product views.
   - **Roles That Can Use This Register**: Which roles can pick this register. Leave empty to allow every role. Owners can always use it.
   - **Card Terminal**: The card terminal at this register. See [Card Terminal per Register](#card-terminal-per-register).
4. Click **Save**.

---

## Workstations

Together, categories and roles turn a register into a workstation. For example:

| Register | POS Product Categories | Roles That Can Use It |
|----------|------------------------|-----------------------|
| Front Desk | Range time, memberships, rentals | Front Desk |
| Pro Shop | Firearms, ammunition, accessories | Manager, Admin |

A Front Desk user's register picker then lists only the Front Desk register, so they only see front-desk products.

---

## Card Terminal per Register

If your store has more than one card terminal (for example POS1 and POS2, each set up as its own payment method), set each register's **Card Terminal** so cashiers can't pick the wrong one.

- **Cashiers see only their terminal.** At a register with a terminal set, the POS only offers that terminal's payment method. The other terminals' methods are hidden. Cash, invoice and any method with no terminal are always shown.
- **It follows the register they picked.** Switching registers changes which card method is offered.
- **It can't be bypassed.** If a card method that belongs to another register's terminal is somehow selected, the sale is refused with a "Wrong terminal" message and the card isn't charged.
- **Signatures use it too.** Customers sign on this register's terminal. See [Signing on the Card Terminal](./terminal-signatures.md).
- **Leave it empty** to show every payment method at that register, as before.

The picker lists the terminals already set on your payment methods. Add the terminals there first (**Payment Methods > Device**).

---

## Register List

The list shows:

| Column | Description |
|--------|-------------|
| **Name** | Register name |
| **Description** | Optional description |
| **Active** | Whether the register is currently in use |
| **Created at** | When the register was set up |

---

## Editing a Register

Click **Edit** to update a register's name, description, or active status.

---

## Tips

- Create a register for each physical terminal location.
- If a user's role changes and they can no longer use their current register, they're asked to pick one of their own.
- Deactivate registers that are no longer in use instead of deleting them — this preserves historical data.
- Make sure cashiers select the correct register when starting their shift for accurate Z-Report reconciliation.
