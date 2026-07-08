/**
 * Private configuration for sensitive information
 * 
 * Copy this file to private.ts and fill in the actual values
 * Never commit private.ts to version control
 */

export const privateConfig = {
  /**
   * Password for accessing Vantis Core investor documentation
   * Change this to a secure password in production
   */
  coreProposalPassword: "1234",
  
  /**
   * Password for accessing Vantis Social investor documentation
   * Change this to a secure password in production
   */
  socialProposalPassword: "1234",
} as const;
