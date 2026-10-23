---
sidebar_position: 1
---

# General Setting

The General Settings page is where you configure your store's core business information, preferences, and profile.

---

## About Section

Configure your business basics:

- **Shop Name**: Your store's display name.
- **Business Type**: Select your business type (e.g., retail, FnB). This affects which features are visible.
- **Shop Location**: Your store's physical address.
- **Photo**: Upload your business logo for receipts and branding.

---

## App Tab

Additional settings found inside the App tab:

- **Currency**: Set the currency used throughout the system.

---

## Tax & Financial Settings

- **Tax configuration**: Set your tax rate and how it applies to sales.
- **Currency format**: Control how amounts are displayed.

---

## Category Markups

Set default markup percentages at the category level. This allows you to apply consistent pricing rules across product categories.

---

## Profile

Update your personal account settings:

- **Name** and **contact information**
- **Timezone** preference
- **Language**: Choose the system language.
- **New Password**: Update your account password.
- **Session Lock PIN**: Set a PIN to lock and unlock your session.

---

## Manager Override Codes

Manager Override Codes require a PIN to be entered before certain POS actions can proceed. This prevents unauthorized price changes, discounts, and refunds.

### Setting Up Override PINs

1. Go to **User > Users** and edit a manager/admin user.
2. In the **Manager Override** section, enter a 4-6 digit numeric PIN.
3. Save.

Each manager can have their own PIN. PINs are securely hashed and never displayed after creation.

A PIN only works while its owner's role has the `approve manager override` permission (Admin and Manager by default). Moving someone to a role without it retires their PIN. After 5 wrong PINs in a minute, PIN entry is paused for that minute.

### Configuring Protected Actions

Under **Setting > General Setting > App tab**, find the **Manager Override Codes** section. Check which actions should require a PIN:

| Action | What It Protects |
|--------|-----------------|
| **Discounts & Pricing** | Editing unit prices, per-item discounts, line discounts, and transaction-level discounts. |
| **Refunds** | Issuing a refund from a sale's page. The refund form asks for the manager PIN. |

Nothing is protected until you tick it here. Same-day card refunds are voided automatically as part of the refund.

When a cashier attempts a protected action, a modal appears prompting for a manager PIN. The override is logged with the approver's name, the cashier, the action, and the context.

### Viewing Override Logs

Go to **Setting > Override Logs** to see a history of all manager overrides. This page is only visible to admin users. Each log entry shows:

- Date/time
- Action type
- Who approved it
- Which cashier requested it

---

## Integrations

The Integrations section allows you to connect ManageRegister with third-party services and configure external integrations.

---

## Tips

- Set your **Business Type** correctly — some features (like Table management) only appear for specific business types.
- Always set the correct **Timezone** so your reports and selling history timestamps are accurate.
- Configure these settings before going live with sales.
