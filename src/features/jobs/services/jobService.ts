import type { ApiListResponse, ApiResponse } from "../../../shared/types/api";
import { apiRequest } from "../../../shared/api/apiClient";
import type { Job, JobPayload } from "../types/job";

export const jobService = {
  getJobs: (token?: string) =>
    apiRequest<ApiListResponse<Job>>("/jobs", {
      method: "GET",
      token,
    }),

  getJobById: (id: number, token?: string) =>
    apiRequest<ApiResponse<Job>>(`/jobs/${id}`, {
      method: "GET",
      token,
    }),

  createJob: (payload: JobPayload, token?: string) =>
    apiRequest<ApiResponse<Job>>("/jobs", {
      method: "POST",
      token,
      body: JSON.stringify(payload),
    }),
};
