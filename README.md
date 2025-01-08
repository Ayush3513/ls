# Social Media Performance Analysis

## Project Overview

This project is a basic analytics module built for the Pre-Hackathon Assignment. It utilizes Langflow and DataStax to analyze engagement data from mock social media accounts, providing insights into post performance across different content types.

**Project Link:** [https://ls-orpin.vercel.app/](https://ls-orpin.vercel.app/)

## Objective

The main goal of this project is to demonstrate the integration of DataStax Astra DB and Langflow to create a workflow that analyzes social media engagement data and generates insights using GPT.

## Features

1. **Data Storage:** Utilizes DataStax Astra DB to store mock social media engagement data.
2. **Data Analysis:** Implements a Langflow workflow to analyze post performance based on engagement metrics.
3. **GPT-Powered Insights:** Integrates GPT to generate human-readable insights from the analyzed data.

## Tools Used

- **DataStax Astra DB:** Used for storing and querying the mock social media engagement data.
- **Langflow:** Employed to create the analysis workflow and integrate with GPT.
- **GPT Integration:** Utilized to generate natural language insights from the analyzed data.

## Langflow Workflow 

![image](https://github.com/user-attachments/assets/bfa7201e-00ce-49ef-a653-f8d736a1e551)

# Data Insertion Flow

![image](https://github.com/user-attachments/assets/1d81aa28-01df-4559-8fc5-62f57e5b3dec)


1. **Data Ingestion:**
   - Created a mock dataset simulating social media engagement metrics (likes, shares, comments) for various post types (carousel, reels, static images).
   - Stored this dataset in DataStax Astra DB for efficient querying and analysis.

2. **Performance Analysis:**
   - Developed a Langflow workflow that accepts post types as input.
   - The workflow queries the Astra DB to calculate average engagement metrics for each post type.

3. **Insight Generation:**
   - Integrated GPT within the Langflow workflow to interpret the analyzed data.
   - GPT generates easy-to-understand insights based on the engagement metrics.

## Sample Insights

The project generates insights such as:
- "Carousel posts have 20% higher engagement than static posts."
- "Reels drive 2x more comments compared to other formats."

## How to Use

1. Visit the project link: [https://ls-orpin.vercel.app/](https://ls-orpin.vercel.app/)
2. Select a post type (carousel, reels, or static image) to analyze.
3. The system will query the database, analyze the data, and generate insights.
4. Review the generated insights to understand the performance of different post types.

## Future Enhancements

- Implement real-time data ingestion from actual social media platforms.
- Expand the analysis to include more detailed metrics and demographic data.
- Develop a user-friendly dashboard for visualizing the analytics and insights.

## Acknowledgments

We would like to thank the hackathon organizers for providing this opportunity and the tools (DataStax Astra DB and Langflow) to work with.
