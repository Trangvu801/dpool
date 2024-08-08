// src/pages/api/tagNotifications.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createTagNotification(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { postId, content, issuerId } = req.body;

    if (!postId || !content || !issuerId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const taggedUsernames = content.match(/@[a-zA-Z0-9_-]+/g) || [];

    try {
      for (const username of taggedUsernames) {
        const user = await prisma.user.findUnique({
          where: { username: username.slice(1) }, // Remove the '@'
        });

        if (user) {
          await prisma.notification.create({
            data: {
              recipientId: user.id,
              issuerId,
              postId,
              type: 'TAG',
            },
          });
        }
      }

      return res.status(201).json({ message: 'Notifications created successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}

export default createTagNotification;
