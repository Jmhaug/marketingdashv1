"use client";

import { useState } from "react";
import { Star, ThumbsUp, MessageSquare, Send } from "lucide-react";

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ThumbsUp className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-2xl font-semibold mb-2">Thank you for your feedback!</h1>
          <p className="text-gray-500 mb-6">
            Your input helps us improve the product for everyone.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setRating(0);
              setFeedback("");
            }}
            className="px-6 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">Feedback</h1>
        <p className="text-gray-500 text-sm mt-1">Help us improve your experience</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Rating */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h2 className="font-semibold mb-4">How would you rate your experience?</h2>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="p-1"
              >
                <Star
                  size={32}
                  className={`${
                    star <= (hoveredRating || rating)
                      ? "text-amber-400 fill-amber-400"
                      : "text-gray-300"
                  } transition-colors`}
                />
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-sm text-gray-500 mt-3">
              {rating === 1 && "We're sorry to hear that. Please tell us how we can improve."}
              {rating === 2 && "We appreciate your feedback. What could be better?"}
              {rating === 3 && "Thanks! Any suggestions for improvement?"}
              {rating === 4 && "Great! We're glad you're enjoying it."}
              {rating === 5 && "Awesome! We're thrilled you love it!"}
            </p>
          )}
        </div>

        {/* Feedback Type */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h2 className="font-semibold mb-4">What type of feedback do you have?</h2>
          <div className="grid grid-cols-3 gap-3">
            {["Bug Report", "Feature Request", "General Feedback"].map((type) => (
              <button
                key={type}
                type="button"
                className="p-3 border border-gray-200 rounded-xl text-sm hover:border-gray-400 hover:bg-gray-50 focus:border-black focus:bg-gray-50"
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h2 className="font-semibold mb-4">Tell us more</h2>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your thoughts, ideas, or issues..."
              rows={5}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-400 resize-none"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!rating || !feedback}
          className="w-full py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <Send size={16} />
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
