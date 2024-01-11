import { z } from "zod";

export const updateUserSchema = z.object({
  full_name: z.string().min(2).max(32).optional(),
  avatar_url: z.string().url().optional(),
  locale: z.string().optional(),
});

export type UpdateUserFormValues = z.infer<typeof updateUserSchema>;

export const updateTeamSchema = z.object({
  name: z.string().min(2).max(32).optional(),
  logo_url: z.string().url().optional(),
  revalidatePath: z.string(),
});

export type UpdateTeamFormValues = z.infer<typeof updateTeamSchema>;

export const deleteBankAccountSchema = z.object({
  id: z.string().uuid(),
});

export type DeleteBankAccountFormValues = z.infer<
  typeof deleteBankAccountSchema
>;

export const updateSubscriberPreferenceSchema = z.object({
  templateId: z.string(),
  teamId: z.string(),
  revalidatePath: z.string(),
  subscriberId: z.string(),
  type: z.string(),
  enabled: z.boolean(),
});

export const changeSpendingPeriodSchema = z.object({
  id: z.string(),
  from: z.string().datetime(),
  to: z.string().datetime(),
});

export const changeChartTypeSchema = z.enum(["profit_loss", "income"]);
export const changeChartPeriodSchema = z.object({
  from: z.string().datetime().optional(),
  to: z.string().datetime().optional(),
});

export const changeTransactionsPeriodSchema = z.enum([
  "all",
  "income",
  "expense",
]);

export const createAttachmentsSchema = z.array(
  z.object({
    path: z.string(),
    name: z.string(),
    size: z.number(),
    transaction_id: z.string(),
    type: z.string(),
  })
);

export const deleteAttachmentSchema = z.string();

export const exportTransactionsSchema = z.object({
  from: z.coerce.date(),
  to: z.coerce.date(),
});

export const deleteFileSchema = z.object({
  id: z.string(),
  path: z.array(z.string()),
});

export const deleteFolderSchema = z.object({
  path: z.array(z.string()),
});

export const createFolderSchema = z.object({
  path: z.string(),
  name: z.string(),
});

export const unenrollMfaSchema = z.object({
  factorId: z.string(),
});

export const mfaVerifySchema = z.object({
  factorId: z.string(),
  challengeId: z.string(),
  code: z.string(),
});

export const shareFileSchema = z.object({
  filepath: z.string(),
  expireIn: z.number(),
});

export const voteSchema = z.object({
  revalidatePath: z.string(),
  id: z.string(),
});

const bankAccount = z.object({
  account_id: z.string(),
  bank_name: z.string(),
  currency: z.string(),
  name: z.string(),
  owner_name: z.string(),
  institution_id: z.string(),
  logo_url: z.string().optional(),
  bban: z.string().optional(),
  bic: z.string().optional(),
  iban: z.string().optional(),
});

export const connectBankAccountSchema = z.array(bankAccount);

export const sendFeedbackSchema = z.object({
  feedback: z.string(),
});

export const updateTransactionSchema = z.object({
  id: z.string(),
  note: z.string().optional(),
  category: z.string().optional(),
  assigned_id: z.string().optional(),
});

export const updateSimilarTransactionsSchema = z.object({
  id: z.string(),
});

export const updaterMenuSchema = z.array(
  z.object({
    path: z.string(),
    name: z.string(),
  })
);

export const changeTeamSchema = z.object({
  teamId: z.string(),
  redirectTo: z.string(),
});

export const createTeamSchema = z.object({
  name: z.string(),
  redirectTo: z.string().optional(),
});

export const changeUserRoleSchema = z.object({
  userId: z.string(),
  teamId: z.string(),
  role: z.enum(["owner", "member"]),
});

export const deleteTeamMemberSchema = z.object({
  userId: z.string(),
  teamId: z.string(),
});

export const leaveTeamSchema = z.object({
  teamId: z.string(),
  redirectTo: z.string().optional(),
  role: z.enum(["owner", "member"]),
});

export const deleteTeamSchema = z.object({
  teamId: z.string(),
});

export const inviteTeamMembersSchema = z.object({
  invites: z.array(
    z.object({
      email: z.string().email().optional(),
      role: z.enum(["owner", "member"]),
    })
  ),
  redirectTo: z.string().optional(),
});

export type InviteTeamMembersFormValues = z.infer<
  typeof inviteTeamMembersSchema
>;

export const deleteInviteSchema = z.object({ id: z.string() });
export const acceptInviteSchema = z.object({ id: z.string() });
export const declineInviteSchema = z.object({ id: z.string() });

export const inboxFilter = z.enum(["all", "completed", "archived", "deleted"]);

export const updateInboxSchema = z.object({
  id: z.string(),
  read: z.boolean().optional(),
  trash: z.boolean().optional(),
  archived: z.boolean().optional(),
  transaction_id: z.string().nullable().optional(),
});

export const changeInboxFilterSchema = inboxFilter.optional();
